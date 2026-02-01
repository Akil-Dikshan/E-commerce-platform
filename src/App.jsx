import { Button } from "@/components/ui/button"
import  Navigation from "./components/Navigation/Navigation"
import { Switch } from "@/components/ui/switch"
const App = () => {
  return (
    <>
      <Navigation />
      <Button variant={"outline"}>Click me</Button>
      <Switch/>
    </>
  )
}

export default App 