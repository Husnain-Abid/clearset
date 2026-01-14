const Affiliations = () => {
  const affiliations = [
    {
      name: "Google for Startups Cloud & Growth Ads",
      logo: "https://heyboss.heeyo.ai/user-assets/GFS_quEJshvv.png",
      description: "Accessing world-class resources, mentorship, and technology to accelerate AI innovation"
    },
    {
      name: "IDEA Institute",
      logo: "https://heyboss.heeyo.ai/user-assets/IDEAinstitute_SMiUT1lF.png",
      description: "Focusing on innovation, development, and entrepreneurial advancement in technology"
    },
    {
      name: "NVIDIA Inception Program",
      logo: "https://heyboss.heeyo.ai/user-assets/NVIDIA%20Inception_DJ4q4n5A.png",
      description: "Leveraging advanced GPU technology and AI development resources"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Membership & Affiliations</h2>
          <p className="section-subtitle">
            Proud member of prestigious organizations and accelerator programs that drive innovation and excellence in AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {affiliations.map((item, index) => (
            <div
              key={item.name}
              className="glass-card p-8 text-center card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto">
          These strategic partnerships and memberships enable us to stay at the forefront of AI innovation, providing our clients with access to the latest technologies, best practices, and industry insights.
        </p>
      </div>
    </section>
  );
};

export default Affiliations;
