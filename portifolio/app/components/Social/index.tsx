import { Github, Linkedin, Mail } from "lucide-react";
import { SocialContainer } from "./style";

export default function Social() {
  return (
    <SocialContainer>
      <div>
      <ul>
        <li>
          <Github />
        </li>
        <li>
          <Linkedin />
        </li>
        <li>
          <Mail />
        </li>
      </ul>
    </div>
    </SocialContainer>
  );
}