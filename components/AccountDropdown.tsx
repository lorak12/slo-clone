import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CircleUser, Settings, CircleHelp, LogOut, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

function AccountDropdown() {
  const { userId } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Moje konto</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <Settings className="w-4 h-4" />
          Ustawienia
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <CircleHelp className="w-4 h-4" />
          Pomoc
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        {userId !== null ? (
          <SignOutButton redirectUrl="/">
            <DropdownMenuItem className="gap-2">
              <LogOut className="w-4 h-4" />
              Wyloguj się
            </DropdownMenuItem>
          </SignOutButton>
        ) : (
          <SignInButton>
            <DropdownMenuItem className="gap-2">
              <LogIn className="w-4 h-4" />
              Zaloguj się
            </DropdownMenuItem>
          </SignInButton>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AccountDropdown;
