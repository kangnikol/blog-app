import Image from "next/image";

const About = () => {
  return (
    <div class="jumbotron">
      <Image className="rounded-circle pp" src="/profile.jpg" width={128} height={128} />
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    </div>
  );
};

export default About;
