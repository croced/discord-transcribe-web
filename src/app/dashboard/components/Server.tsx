import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DiscordLogoIcon,
  ExternalLinkIcon,
  RocketIcon,
  SunIcon,
  MoonIcon,
} from "@radix-ui/react-icons";
import clsx from "clsx";

interface ServerProps {
  name: string;
  active: boolean;
  users: number;
  tier: string;
  credits: number;
}

export default function Server({
  name,
  active,
  users,
  tier,
  credits,
}: ServerProps) {
  const renderSkeleton = () => {
    return (
      <div className="rounded-md w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-primary-100 h-[45px] w-[45px]"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="space-y-2">
              <div className="h-4 bg-primary-100 rounded"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-4 bg-primary-100 rounded col-span-1"></div>
                <div className="h-4 bg-primary-100 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const dropdownMenu = () => {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="p-1 bg-primary-100 rounded-full">
            <HamburgerMenuIcon />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="min-w-[220px] mt-1 bg-primary-100 rounded-md p-[5px] ">
            <DropdownMenu.Item className="group text-[13px] leading-none text-semiOpaque rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[highlighted]:bg-primary-50 data-[highlighted]:text-white">
              <p>{active ? "Send to sleep" : "Wake bot"}</p>
              <div className="ml-auto pl-[20px] text-semiOpaque group-data-[highlighted]:text-white">
                {active ? <MoonIcon /> : <SunIcon />}
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="group text-[13px] leading-none text-semiOpaque rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[highlighted]:bg-primary-50 data-[highlighted]:text-white">
              <p>Top up credits</p>
              <div className="ml-auto pl-[20px] text-semiOpaque group-data-[highlighted]:text-white">
                <RocketIcon />
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="group text-[13px] leading-none text-semiOpaque rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[highlighted]:bg-primary-50 data-[highlighted]:text-white">
              <p>Remove bot</p>
              <div className="ml-auto pl-[20px] text-semiOpaque group-data-[highlighted]:text-white">
                <ExternalLinkIcon />
              </div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  };

  return (
    <div className="w-full rounded-xl border-2 border-sunset-start/10 bg-gradient-to-r from-sunset-start/5 to-sunset-end/5 overflow-hidden shadow-xl p-2">
      <div className="flex space-x-4">
        <Avatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src={"TODO-REPLACE-ME"}
            alt="My avatar"
          />
          <Avatar.Fallback className="text-primary-100 leading-1 flex h-full w-full items-center justify-center bg-gradient-to-br from-sunset-start to-sunset-end text-[15px] font-medium"></Avatar.Fallback>
        </Avatar.Root>
        <div className="flex flex-row flex-1 justify-between">
          <div className="flex flex-row flex-grow-0">
            <div className="flex flex-col w-52">
              <p>{name}</p>
              <div
                className={clsx(
                  "flex flex-row gap-x-1 whitespace-nowrap",
                  active ? "text-green-300" : "text-red-300 "
                )}
              >
                <DiscordLogoIcon className="translate-y-1/3" />
                <p>Discribe {active ? "activated" : "sleeping"}</p>
              </div>
            </div>
            <div className="flex flex-col uppercase w-24">
              <p className="font-light">users</p>
              <p className="font-extralight text-semiOpaque">{users}</p>
            </div>
            <div className="flex flex-col uppercase w-24">
              <p className="font-light">tier</p>
              <p className="font-extralight text-semiOpaque">{tier}</p>
            </div>
            <div className="flex flex-col uppercase w-24">
              <p className="font-light">credits</p>
              <p className="font-extralight text-semiOpaque">{credits}</p>
            </div>
          </div>
          <div className="text-semiOpaque hover:text-white hover:cursor-pointer hover:transition-colors duration-300 place-self-start">
            {dropdownMenu()}
          </div>
        </div>
      </div>
    </div>
  );
}
