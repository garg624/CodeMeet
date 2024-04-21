"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { createRoomAction } from "./createRoomAction"
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner"

const formSchema = z.object({
  roomname: z.string().min(2).max(20),
  description: z.string().min(1).max(20),
  language: z.string().min(1).max(20),
  githubrepo: z.string().min(1).max(20),
  
})

export function CreateRoomForm() {
  const { user } = useUser();
  const router=useRouter();
  // console.log(user?.id)
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roomname: "",
      description: "",
      language: "",
      githubrepo: ""
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.log(values.roomname)
    
    // todo:
    //? now create a server action to store the data in the room table
    //? and then redirect to the room page
    console.log({...values,userId:user?.id} )
    await createRoomAction({...values,userId:user?.id})
    toast.success("New Room is created successfully✅")
    router.push("/")
  }

  return (
    <>
    <h1>{user?.id}</h1>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="roomname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the Room Name." {...field} />
              </FormControl>
              <FormDescription>
                Room name is required
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter the Description" {...field} />
              </FormControl>
              <FormDescription>
                Enter the description of the room
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Language</FormLabel>
              <FormControl>
                <Input placeholder="Enter the language" {...field} />
              </FormControl>
              <FormDescription>
                Enter the primary language of the project
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="githubrepo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub Repository</FormLabel>
              <FormControl>
                <Input placeholder="Enter the github Repository" {...field} />
              </FormControl>
              <FormDescription>
                Enter the github repo for the project.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-center">
          <Button type="submit" className="w-1/4">Submit</Button>
        </div>

      </form>
    </Form>
    </>
  )
}
