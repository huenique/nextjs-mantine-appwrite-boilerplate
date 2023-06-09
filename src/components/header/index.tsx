import {
  ActionIcon,
  Avatar,
  Group,
  Header as MantineHeader,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useGetIdentity } from "@refinedev/core";
import { IconMoonStars, IconSun } from "@tabler/icons";

interface IUser {
  name: string;
  avatar: string;
}

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity<IUser>();
  const showUserInfo = user && (user.name || user.avatar);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <MantineHeader height={50} p="xs">
      <Group position="right">
        <ActionIcon
          variant="outline"
          color={dark ? "yellow" : "primary"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>
        {showUserInfo && (
          <Group spacing="xs">
            <Title order={6}>{user?.name}</Title>
            <Avatar src={user?.avatar} alt={user?.name} radius="xl" />
          </Group>
        )}
      </Group>
    </MantineHeader>
  );
};
