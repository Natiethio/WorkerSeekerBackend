const connectDB = require("../configration/dbconfig");
const ServiceCategory = require("../models/servicesCategory");

const seedData = async () => {
    try {
        await connectDB();

        // Clear existing data (optional)
        await ServiceCategory.deleteMany();

        // Insert data
        await ServiceCategory.insertMany([
            {
                name: "Cleaner",
                icon: "cleaning_services",
                description: "Professional home and office cleaning services.",
                detail: "Choose from our range of professional cleaning services",
                images: [
                    "https://res.cloudinary.com/dgrj6cljo/image/upload/v1773918136/banner_1_abeizr.png",
                    "https://res.cloudinary.com/dgrj6cljo/image/upload/v1773918137/banner_2_nriljz.png",
                    "https://res.cloudinary.com/dgrj6cljo/image/upload/v1773918137/banner_3_ikougj.png"
                ],
            },
            {
                name: "Laundry",
                icon: Icons.local_laundry_service,
                description: "Affordable and fast laundry   services.",
                detail: "Choose from our range of professional laundry services to clean your cloths",
                images: [
                    "https://res.cloudinary.com/dgrj6cljo/image/upload/v1773918136/laundry_1_pgi2m8.png",
                    "https://res.cloudinary.com/dgrj6cljo/image/upload/v1773918137/laundry_2_fqpbi7.png",
                    "https://res.cloudinary.com/dgrj6cljo/image/upload/v1773918137/laundry_3_lujadw.png",
                ],
            },
            {
                name: "Moving",
                icon: Icons.local_shipping,
                description: "Safe and reliable moving and packing services.",
                detail: "Choose from our range of professional moving and packing services to safely move your properties",
                images: [
                    "https://res.cloudinary.com/dgrj6cljo/image/upload/v1773918138/moving_1_qzvp8t.png",
                    "https://res.cloudinary.com/dgrj6cljo/image/upload/v1773918138/moving_2_yeghta.png",
                    "https://res.cloudinary.com/dgrj6cljo/image/upload/v1773918138/moving_3_pa36lc.png",
                ],
            },
            {
                name: "Electronics",
                icon: Icons.electrical_services,
                description: "Safe and reliable Repair services.",
                detail: "Choose from our range of professional Repair services to repair any house holds",
                images: [
                    "https://res.cloudinary.com/dgrj6cljo/image/upload/v1773918138/electronicsbanner1_gmxizs.jpg",
                    "https://res.cloudinary.com/dgrj6cljo/image/upload/v1773918138/electronicsbanner2_osiwna.jpg",
                    "https://res.cloudinary.com/dgrj6cljo/image/upload/v1773918136/electronicsbanner3_krune6.jpg",   
                ],
            },

        ]);

        console.log("Service Categories Seeded ✅");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedData();