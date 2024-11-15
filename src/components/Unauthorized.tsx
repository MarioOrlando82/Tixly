import { motion } from 'framer-motion';
import Button from './Button';
import UnauthorizedImage from '../assets/images/unauthorized.png';
import { useUserContext } from '../contexts/UserContext';

function Unauthorized() {
  const { login } = useUserContext();
  return (
    <div className="min-h-screen relative overflow-hidden mt-[-5rem]">
      <div className="absolute w-[600px] h-[500px] bg-customGlowingThree opacity-10 rounded-full blur-2xl -left-32 top-72 transform -translate-y-1/2" />

      <div className="absolute w-[600px] h-[500px] bg-customGlowingTwo opacity-20 rounded-full blur-2xl -right-48 top-96 transform -translate-y-1/2" />

      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent p-4 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8"
        >
          <img src={UnauthorizedImage} alt="" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-customWhite mb-4">
            Oops! You're Almost There!
          </h1>
          <p className="text-customLightGrey mb-8 max-w-md mx-auto">
            Login to unlock all the fun and get full access to this page. Don't
            miss out login and dive right in
          </p>

          <div className="flex gap-4 justify-center">
            <Button
              text="Login with Internet Identity"
              className="truncate px-5 py-4"
              onClick={() => login()}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Unauthorized;
