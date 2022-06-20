import GradientLayout from "../../components/gradientLayout";
import SongTable from "../../components/songsTable";
import { validateRoute, validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

const getBGColor = (index) => {
  const colors = ["blue", "green", "orange", "purple", "red", "teal", "yellow"];
  return colors[index % colors.length];
};

const Playlist = ({ playlist }) => {
  return (
    <GradientLayout
      color={getBGColor(playlist.id)}
      roundImage={false}
      title={playlist.name}
      subtitle={"playlist"}
      description={playlist.songs.length + " tracks"}
      image={"https://picsum.photos/200?random=" + playlist.id}
    >
      <SongTable songs={playlist.songs} />
    </GradientLayout>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  let user: any;

  try {
    user = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
    };
  }
  const { id } = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  return {
    props: {
      playlist,
    },
  };
};

export default Playlist;
