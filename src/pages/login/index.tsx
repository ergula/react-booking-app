import Header from "./components/Header";
import Heading from "./components/Heading";
import { useNavigate } from "react-router-dom";

import Text from "./components/Text";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import SocialButton from "./components/SocialButton";

export default function LoginPage() {
  const navigate = useNavigate();

  const dashboardClick = () => {
    navigate('/dashboard')
  }
  return (
    <div className="w-screen bg-background h-screen flex-col overflow-hidden">
      <Header />
      <div className="w-full h-full  grid place-items-center   pt-4">
        <div className="bg-darkBlue shadow-2xl shadow-darkBlue py-6 px-14 w-96 rounded-3xl flex flex-col  text-center mb-16">
          {/* Title */}
          <div className="mb-4">
            <Heading size="lg">LOGIN</Heading>
          </div>
          {/* subTitle */}
          <div className="mb-4">
            <Text size="md">Hey! You can login to Booking App</Text>
          </div>
          {/* Inputs */}
          <div className="mb-2">
            <TextInput placeholder="Username"></TextInput>
          </div>
          <div className="mb-2">
            <TextInput placeholder="Password*"></TextInput>
          </div>
          {/* Login Info */}
          <div className="mb-4 flex justify-start">
            <Text size="sm">Forgotten your password ?</Text>
          </div>
          {/* Button */}
          <div className="mb-6">
            <Button onClick={dashboardClick}>Login</Button>
          </div>
          <div className="mb-2">
            <Text size="sm">Or Login With</Text>
          </div>
          {/* Social Login Buttosn */}
          <div className="flex gap-1 mb-4">
            <SocialButton></SocialButton>
            <SocialButton social="ap"></SocialButton>
            <SocialButton social="fb"></SocialButton>
          </div>
          <div className="mb-2 mt-6">
            <Text size="sm">Create a new Account</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
