import Link from "next/link";
import { Button } from "./ui/button";
import { HomeIcon } from "lucide-react";

const HomeButton = () => {
  return (
    <Button variant='outline' asChild>
      <Link href="/">
        <HomeIcon />
      </Link>
    </Button>
  );
}

export default HomeButton;