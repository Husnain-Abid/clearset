import chamberLogo from "@/assets/chamber-of-commerce-logo.png";
const ChamberMembership = () => {
  return <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-2xl font-serif text-secondary-foreground font-light">Chamber of Commerce Memberships</h2>
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <div className="glass-card p-8 text-center border-8 border-dotted">
            <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center">
              <img src={chamberLogo} alt="Greater New York Chamber of Commerce Member 2025" className="max-w-full max-h-full object-contain" />
            </div>
            <p className="text-muted-foreground">
              Proud member of the Greater New York Chamber of Commerce, committed to business excellence and community engagement.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ChamberMembership;