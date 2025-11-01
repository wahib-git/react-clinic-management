function Features() {
  const features = [
    {
      title: "Fast Performance",
      description: "Our product is lightning fast and reliable.",
    },
    {
      title: "Easy to Use",
      description: "User-friendly design that anyone can navigate.",
    },
    {
      title: "Responsive Design",
      description: "Looks great on any device, from phones to desktops.",
    },
  ];
  return (
    <section id="features" className="features">
      <h3>Key Features</h3>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Features;
