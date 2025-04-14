'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import { User } from '@/types/todo';
import { useLocalStorage } from '@/hooks/useLocalStorage';

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => false,
  logout: () => {},
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage<User | null>('user', null);
  const [users, setUsers] = useLocalStorage<{
    [email: string]: { password: string; user: User };
  }>('users', {});
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage<boolean>(
    'isAuthenticated',
    false
  );

  // Sync isAuthenticated with user state
  useEffect(() => {
    const shouldBeAuthenticated = !!user;
    if (shouldBeAuthenticated !== isAuthenticated) {
      setIsAuthenticated(shouldBeAuthenticated);
    }
  }, [user, isAuthenticated]);

  const login = useCallback(
    async (email: string, password: string) => {
      const storedUser = users[email];

      // If user exists and password matches
      if (storedUser && storedUser.password === password) {
        setUser(storedUser.user);
        return true;
      }

      // If user doesn't exist, auto-register
      const newUser: User = {
        id: crypto.randomUUID(),
        name: email.split('@')[0], // Default name from email
        email,
      };

      const newUsers = {
        ...users,
        [email]: { password, user: newUser },
      };

      setUsers(newUsers);
      setUser(newUser);
      return true;
    },
    [users, setUsers, setUser]
  );

  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
