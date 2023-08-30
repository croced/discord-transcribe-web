import { supabase } from "@/util/supabase";
import * as Avatar from "@radix-ui/react-avatar";
import { ExitIcon } from "@radix-ui/react-icons";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  user: User;
}

interface ParsedUsername {
  user_name: string;
  id: string;
}

export default function UserMenu({ user }: Props) {
  const [parsedUsername, setParsedUsername] = useState<ParsedUsername>();

  const router = useRouter();

  const parseUsername = () => {
    const splitName = user.user_metadata.name.split("#");
    setParsedUsername({ user_name: splitName[0], id: splitName[1] });
  };

  useEffect(() => {
    if (user?.user_metadata?.name) parseUsername();
  }, [user]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const renderHeader = () => {
    return (
      <p className="pb-8 font-extrabold text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sunset-start to-sunset-end inline-block">
        My dashboard
      </p>
    );
  };

  const renderSkeleton = () => {
    return (
      <>
        {renderHeader()}
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
      </>
    );
  };

  const renderContent = () => {
    return (
      <>
        {renderHeader()}
        <div className="rounded-md w-full">
          <div className="flex space-x-4">
            <Avatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
              <Avatar.Image
                className="h-full w-full rounded-[inherit] object-cover"
                src={user.user_metadata.avatar_url}
                alt="My avatar"
              />
              <Avatar.Fallback className="text-primary-100 leading-1 flex h-full w-full items-center justify-center bg-gradient-to-br from-sunset-start to-sunset-end text-[15px] font-medium"></Avatar.Fallback>
            </Avatar.Root>
            <div className="flex-1">
              <div className="">
                <p className="font-medium">{parsedUsername?.user_name}</p>
                <div className="grid grid-cols-3 gap-4 text-semiOpaque">
                  <p>{`#${parsedUsername?.id}`}</p>
                  <div
                    className="flex flex-row items-center hover:text-white hover:cursor-pointer hover:transition-colors duration-300 col-span-2 place-self-end"
                    onClick={handleSignOut}
                  >
                    <p>Sign out</p>
                    <ExitIcon className="ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return !parsedUsername ? renderSkeleton() : renderContent();
}
