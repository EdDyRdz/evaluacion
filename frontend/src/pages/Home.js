import React, { useEffect, useState } from 'react';
import { Button, Typography, Card, List, Spin, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Home = ({ onLogout }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_MOVIES_API_URL}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleLogout = () => {
    onLogout(); // Call the logout handler from App.js
    navigate('/');
  };

  return (
    <Card style={{ width: 800, margin: '50px auto', textAlign: 'center' }}>
      <Title level={2}>Bienvenido al Home!</Title>
      <Paragraph>Has iniciado sesión exitosamente.</Paragraph>
      <Button style={{ backgroundColor: 'red', color: 'white', marginBottom: '20px' }} onClick={handleLogout}>
        Cerrar Sesión
      </Button>

      <Title level={3}>Películas de sample_mflix</Title>
      {loading && <Spin tip="Cargando películas..." />}
      {error && <Alert message="Error" description={`No se pudieron cargar las películas: ${error}`} type="error" showIcon />}
      {!loading && !error && (
        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
          dataSource={movies}
          renderItem={movie => (
            <List.Item>
              <Card title={movie.title} style={{ height: '100%' }}>
                <Paragraph ellipsis={{ rows: 3 }}>{movie.plot}</Paragraph>
                {movie.poster && <img src={movie.poster} alt={movie.title} style={{ width: '100%', height: 'auto' }} />}
              </Card>
            </List.Item>
          )}
        />
      )}
    </Card>
  );
};

export default Home;