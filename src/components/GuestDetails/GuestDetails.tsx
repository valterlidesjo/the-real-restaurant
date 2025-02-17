import React from "react";

const GuestDetails: React.FC = () => {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Reservation Details</h2>
      <p className="mb-4">
        Thank you for choosing our restaurant for your upcoming dining
        experience. We take pride in offering an eclectic menu that features a
        range of culinary delights, including our beloved artisanal pizzas
        crafted with the freshest ingredients.
      </p>
      <p className="mb-4">
        <strong>Cancellation Policy:</strong> To help us ensure that every guest
        enjoys an exceptional experience, please cancel your reservation at
        least 24 hours in advance.
      </p>

      <p className="mb-4">
        We look forward to welcoming you and ensuring your dining experience is
        memorable from start to finish. Enjoy your meal and the company of those
        around you in an environment that celebrates great food, good vibes, and
        lasting memories.
      </p>
    </div>
  );
};

export default GuestDetails;
