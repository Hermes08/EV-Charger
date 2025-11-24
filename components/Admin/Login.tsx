
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import Button from '../ui/Button';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded demo password for client-side protection
    if (password === 'demo' || password === 'admin') {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md bg-surface border-gray-800">
        <CardHeader>
          <div className="flex items-center justify-center gap-2 mb-4">
            <i className="fa-solid fa-bolt text-secondary text-2xl"></i>
            <span className="text-xl font-bold text-white">CMS Login</span>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-400">Password (Try 'demo')</label>
              <input 
                type="password" 
                className="w-full mt-1 bg-background border border-gray-700 rounded p-2 text-white focus:border-secondary focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </div>
            {error && <p className="text-red-500 text-sm">Incorrect password</p>}
            <Button type="submit" variant="primary" className="w-full">Access Dashboard</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
