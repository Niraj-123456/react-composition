import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
  return (
    <div className="w-full p-4 border border-black">
      <div className="flex justify-between items-center">
        <h1>Fake Store</h1>

        <div>
          <Avatar>
            <AvatarImage src="https://" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
