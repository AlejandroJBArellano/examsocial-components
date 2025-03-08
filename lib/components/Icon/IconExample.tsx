import React, { useState } from "react";
import { Icon } from "./Icon";

interface IconExampleProps {
  /**
   * Optional CSS class names
   */
  className?: string;
}

/**
 * Example component that demonstrates how to use the Icon component
 */
export const IconExample: React.FC<IconExampleProps> = ({ className }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isNotificationsOn, setIsNotificationsOn] = useState(false);

  return (
    <div className={`flex flex-col gap-6 p-4 ${className || ""}`}>
      <div className="flex items-center gap-2">
        <Icon name="home" size={24} />
        <span>Home</span>
      </div>

      <div className="flex items-center gap-2">
        <Icon
          name="favorite"
          filled={isFavorite}
          onClick={() => setIsFavorite(!isFavorite)}
          className="cursor-pointer text-red-500"
          size={24}
        />
        <span>{isFavorite ? "Remove from favorites" : "Add to favorites"}</span>
      </div>

      <div className="flex items-center gap-2">
        <Icon
          name="notifications"
          filled={isNotificationsOn}
          onClick={() => setIsNotificationsOn(!isNotificationsOn)}
          className="cursor-pointer text-blue-500"
          size={24}
        />
        <span>
          {isNotificationsOn ? "Notifications on" : "Notifications off"}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Icon name="settings" weight={700} size={24} />
        <span>Settings</span>
      </div>

      <div className="flex items-center gap-2">
        <Icon name="search" size={24} />
        <span>Search</span>
      </div>

      <div className="grid grid-cols-4 gap-4 border-t border-gray-200 pt-4">
        <div className="flex flex-col items-center">
          <Icon name="person" size={32} />
          <span className="mt-1 text-xs">Profile</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="mail" size={32} />
          <span className="mt-1 text-xs">Messages</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="calendar_today" size={32} />
          <span className="mt-1 text-xs">Calendar</span>
        </div>
        <div className="flex flex-col items-center">
          <Icon name="help" size={32} />
          <span className="mt-1 text-xs">Help</span>
        </div>
      </div>
    </div>
  );
};
