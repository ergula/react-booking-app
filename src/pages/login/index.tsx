import React from "react";
import Header from "./components/Header";
import Heading from "./components/Heading";

import Text from "./components/Text";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import SocialButton from "./components/SocialButton";

export default function LoginPage() {
  return (
    <div className="w-screen bg-gray-100 h-screen flex-col overflow-hidden">
      <Header />
      <div className="w-full h-full  grid place-items-center   pt-4">
        <div className="bg-darkBlue shadow-2xl shadow-darkBlue py-6 px-14 w-96 rounded-3xl flex flex-col  text-center mb-16">
          <div className="mb-4">
            <Heading size="lg">LOGIN</Heading>
          </div>
          <div className="mb-4">
            <Text size="md">Hey! You can login to Booking App</Text>
          </div>
          <div className="mb-2">
            <TextInput placeholder="Username"></TextInput>
          </div>
          <div className="mb-2">
            <TextInput placeholder="Password*"></TextInput>
          </div>
          <div className="mb-4 flex justify-start">
            <Text size="sm">Forgotten your password ?</Text>
          </div>
          <div className="mb-6">
            <Button>Login</Button>
          </div>
          <div className="mb-2">
            <Text size="sm">Or Login With</Text>
          </div>
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
