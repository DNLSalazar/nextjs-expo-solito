import { useMutation } from "@tanstack/react-query";
import { SERVER_URL } from "app/config/constants";
import axios from "axios";
import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Pressable } from "react-native";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const mutation = useMutation({
    mutationFn: async (data: { email: string, pass: string }) => {
      try {
        console.log("making request for login", data);
        const result = await axios.post(`${SERVER_URL}/api/login`, {
          email: data.email, pass: data.pass
        });

        return result.data;
      } catch (error) {
        console.error("Error on request", error);
        return null;
      }
    }
  });

  return (
    <View className="flex-1 justify-center items-center">
      {mutation.isError && <Text>{mutation.error.message}</Text>}
      <Text>Login</Text>
      <Text>Email</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Email"
        onChangeText={newText => setEmail(newText)}
        value={email}
      />
      <Text>Pass</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Password"
        onChangeText={newText => setPass(newText)}
        value={pass}
      />
      <Pressable className="bg-blue-500 px-7 py-4 rounded" onPress={() => mutation.mutate({ email, pass })} disabled={mutation.isPending}><Text>SUBMIT</Text></Pressable>
      {mutation.data && <Text>{JSON.stringify(mutation.data)}</Text>}
    </View>
  )
}
