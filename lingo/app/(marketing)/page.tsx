import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-coll">
      <main className=" flex-1 flex flex-col items-center justify-center">
      <p className="text-green-500 font-bold text-xs"> 
        <Button size="lg">Click me </Button>
      </p>
      </main>
    </div>
  )
}
