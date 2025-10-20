import { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = 'http://localhost:8000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const endpoint = isLogin ? '/login' : '/register';
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ ${data.message}`);
        setEmail('');
        setPassword('');
        
        // Si login réussi, sauvegarder l'utilisateur
        if (isLogin && data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
          console.log('User logged in:', data.user);
        }
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setMessage('❌ Erreur de connexion au serveur. Vérifiez que le backend est démarré.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setMessage('✅ Déconnexion réussie');
  };

  const currentUser = JSON.parse(localStorage.getItem('user') || 'null');

  return (
    <div className="App">
      <div className="container">
        <h1>🔐 {isLogin ? 'Connexion' : 'Inscription'}</h1>

        {currentUser && (
          <div className="user-info">
            <p>Connecté en tant que: <strong>{currentUser.email}</strong></p>
            <button onClick={handleLogout} className="btn-secondary">
              Déconnexion
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Mot de passe:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={3}
            />
          </div>

          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? '⏳ Chargement...' : isLogin ? 'Se connecter' : "S'inscrire"}
          </button>
        </form>

        <div className="toggle">
          <button 
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage('');
            }}
            className="btn-link"
          >
            {isLogin 
              ? "Pas de compte ? S'inscrire" 
              : 'Déjà un compte ? Se connecter'}
          </button>
        </div>

        {message && (
          <div className={`message ${message.includes('✅') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;