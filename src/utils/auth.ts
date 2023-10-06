import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOption: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: '/sign-in' },
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = {
          id: '1',
          name: 'Administrator',
          email: 'admin@project.com',
          image: '/avatar.jpeg',
        };

        if (email.toLowerCase() === 'admin' && password === 'pass#123')
          return user;
        else throw new Error('Нэвтрэх нэр эсвэл нууц үг буруу байна!');
      },
    }),
  ],
  callbacks: {
    session: async ({ session }) => {
      return session;
    },
  },
};
