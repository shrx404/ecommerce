import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col justify-center gap-4">
        <div>
          <Button variant="elevated">I am a Button</Button>
        </div>

        <div>
          <Input />
        </div>

        <div>
          <Progress value={50} />
        </div>

        <div>
          <Textarea placeholder="Hello World" />
        </div>

        <div>
          <Checkbox />
        </div>

        <div>
          <Switch />
        </div>
      </div>
    </div>
  );
}
