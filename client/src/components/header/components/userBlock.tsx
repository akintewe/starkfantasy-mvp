import React, { useState } from "react";

interface UserBlockProps {
    balance?: string;
    connect?: string;
    profile?: string;
}

const UserBlock: React.FC<UserBlockProps> = ({
    balance = "0.00000 STRK",
    connect = "Connect Wallet",
    profile = "/icons/profile.png",
}) => {
    const [isConnected, setIsConnected] = useState(false);

    const handleConnect = () => {
        setIsConnected(true);
    };

    return (
        <div className="absolute right-10 flex flex-col gap-4 items-end my-[-106px]">
            {/* connected to the wallet */}
            {isConnected ? (
                <div className="w-[280px] border p-2 justify-center flex gap-3 items-center bg-slate-900 rounded-full hover:opacity-90 transition-opacity">
                    <div className="text-white text-sm px-4 text-center min-w-[150px] py-2 border-[5px] border-slate-900 rounded-full bg-[#FF9500] ml-2">
                        {balance}
                    </div>
                    <img
                        className="rounded-full w-[100px] h-[50px]"
                        src={profile}
                        alt="Profile Logo"
                    />
                </div>
            ) : (
                // Not connected to the wallet
                <div className="w-[280px] border p-2 justify-center flex gap-3 items-center bg-slate-900 rounded-full hover:opacity-90 transition-opacity">
                    <div className="text-white text-sm px-4 text-center min-w-[150px] py-2 border-[5px] border-slate-900 rounded-full bg-[#FF9500] ml-2">
                        {connect}
                    </div>
                    <button onClick={handleConnect} className="w-fit rounded-full hover:cursor-pointer">
                        <img
                            className="rounded-full w-[100px] h-[50px]"
                            src={profile}
                            alt="Profile Logo"
                        />

                    </button>
                </div>
            )}
        </div>
    );
};

export default UserBlock;
