export default function ProjectCard({ title, description, coverImage, link }) {
  console.log("coverImage", coverImage);
  return (
    <article
      style={{
        marginBottom: 32,
        background: "gray",
        padding: 16
      }}
    >
      <img
        style={{
          width: 200
        }}
        src={coverImage}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">
        See more
      </a>
    </article>
  );
}
