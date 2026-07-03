import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const { Pool } = pg;

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'roosty',
  password: 'postgres',
  port: 5432,
});

app.get('/', (req, res) => {
  res.json({ message: 'Roosty API работает 🚀' });
});

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');

    res.json({
      success: true,
      time: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// лайки
app.get('/posts/:postId/likes', async (req, res) => {
  const { postId } = req.params;
  const userId = 1;

  try {
    const likesResult = await pool.query(
      'SELECT COUNT(*) FROM likes WHERE post_id = $1',
      [postId]
    );

    const userLikeResult = await pool.query(
      'SELECT * FROM likes WHERE user_id = $1 AND post_id = $2',
      [userId, postId]
    );

    res.json({
      likes: Number(likesResult.rows[0].count),
      liked: userLikeResult.rows.length > 0,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// получение количества лайков
app.post('/posts/:postId/like', async (req, res) => {
  const { postId } = req.params;
  const userId = 1;

  try {
    const existingLike = await pool.query(
      'SELECT * FROM likes WHERE user_id = $1 AND post_id = $2',
      [userId, postId]
    );

    let liked;

    if (existingLike.rows.length > 0) {
      await pool.query(
        'DELETE FROM likes WHERE user_id = $1 AND post_id = $2',
        [userId, postId]
      );

      liked = false;
    } else {
      await pool.query(
        'INSERT INTO likes (user_id, post_id) VALUES ($1, $2)',
        [userId, postId]
      );

      liked = true;
    }

    const likesResult = await pool.query(
      'SELECT COUNT(*) FROM likes WHERE post_id = $1',
      [postId]
    );

    res.json({
      likes: Number(likesResult.rows[0].count),
      liked,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// комменты 
// получение комментариев поста
app.get('/posts/:postId/comments', async (req, res) => {
  const { postId } = req.params;

  try {
    const result = await pool.query(
      `
      SELECT
        comments.id,
        comments.content,
        comments.created_at,
        users.name
      FROM comments
      JOIN users ON users.id = comments.user_id
      WHERE comments.post_id = $1
      ORDER BY comments.created_at DESC
      `,
      [postId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// создание комментария
app.post('/posts/:postId/comments', async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;

  const userId = 1;

  try {
    await pool.query(
      `
      INSERT INTO comments (user_id, post_id, content)
      VALUES ($1, $2, $3)
      `,
      [userId, postId, content]
    );

    const result = await pool.query(
      `
      SELECT
        comments.id,
        comments.content,
        comments.created_at,
        users.name
      FROM comments
      JOIN users ON users.id = comments.user_id
      WHERE comments.post_id = $1
      ORDER BY comments.created_at DESC
      `,
      [postId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// удаление комментария
app.delete('/comments/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query(
      'DELETE FROM comments WHERE id = $1',
      [id]
    );

    res.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});