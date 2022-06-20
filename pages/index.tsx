import GradientLayout from "../components/gradientLayout";

const Home = () => {
  return (
    <GradientLayout
      color="blue"
      subtitle="profile"
      title="Jorge Aguilar"
      description="15 public playlist"
      image = "https://i.pinimg.com/originals/18/5a/9f/185a9f9e4e7bdda36721c607a2555869.jpg"
      roundImage = {true}
    >
      <div>Home page</div>
    </GradientLayout>
  );
};

export default Home;
