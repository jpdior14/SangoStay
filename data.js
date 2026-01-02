// SangoStay Central Database - data.js
const properties = [
    {
        id: "akwa-modern",
        name: "Modern Apartment in Akwa",
        price: 35000,
        location: "Akwa, Douala",
        landmark: "Near Pharmacie du Centre",
        host: "Jean-Pierre",
        rating: 4.85,
        reviews: 124,
        amenities: ["Generator", "Borehole", "Wifi", "AC"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNrpNtIfRJXDX1-QkLorFAQPOLJ977PUGq2gCdGPId8wH18_ws8V53T1i3ozKrFCqtJ90IAm9bro1OIk8jXMNCexs_-R9XzXB6JYmKNFH6g0hRLt7Ca9K3Zy1uBpvKx-XYlba4UNPCxR_PJv9tquOlPdHKzNnpBFOrw3BDXU1MkKaZJPuB6ttdRZZCnIQQikac2g5aPP5Yd2K7HbRvbzEa4k-1tQpY5Xk1OcgofZyVevguf4DLdBVCXdg652FHcUJ8nZT9OFr7Vjw"
    },
    {
        id: "bastos-studio",
        name: "Cozy Studio in Bastos",
        price: 25000,
        location: "Bastos, Yaoundé",
        landmark: "Opposite Nigerian Embassy",
        host: "Mamma Marie",
        rating: 4.92,
        reviews: 85,
        amenities: ["Wifi", "Security Guard", "Parking"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKIZ1RMTkGg6LeYATFAy4EStlX4L42K6SNgN6-PNl224CTJBfegzSILG2aeAJRTo_d9-zkELs_VeqjXuzW4TJ5BLEvgP78bPJLlHq5laicQYdUZJv8MhJJ_d7YVgDt5cIOC48PH4blwQbQwFvSgdcLd0XFN0bhCXnfr5bQgSrMUXqeREjX0H8PxVOCbh5eh-t-E8t-NdkvVnDR0iSkm_bljvq76CHZL4haR54C6gGdG_2a6szK-4v5DVTOZ5DTh-FFU9f9JY-TCFA"
    },
    {
        id: "kribi-villa",
        name: "Beachfront Villa Kribi",
        price: 65000,
        location: "Kribi, South",
        landmark: "Near Chutes de la Lobé",
        host: "Uncle T",
        rating: 5.0,
        reviews: 42,
        amenities: ["Pool", "Beach Access", "AC", "Chef"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsiz_R6W4RSMza8O8a1yg-ZPbQmLuzkIaklIcPmeXQ0fliwDaIpkIEVcqJf3WtORq2QhYphhgu0W-OEhHWAJfSJbWuJEKxtvhTXZ6349eV_an9rIUByuD8DCM9nVjHJSgTK8AnTwJMDHeoInn0N700LYZqyryM-djrfCkccj0_D4a_H5pqZ1IN_Ks_c6aQXqJTsitqr4dg09fQHW7DpgCVzvZ8fPD43m2H2EEkb_KvzJENvsazZ1R2q_KY8cLooTTFKlbCjFxcgx4"
    },
    {
        id: "buea-mountain",
        name: "Mountain View Lodge",
        price: 15000,
        location: "Buea, South West",
        landmark: "Molyko, near UB Junction",
        host: "Enow",
        rating: 4.7,
        reviews: 20,
        amenities: ["Wifi", "Heater", "Breakfast"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX8_D3TgPyAYiWQuFAyr5JYPKI5IfQP6oTk22usodR4Vnq5xwwXPhjzZNIAfdtNM5LXL2UtnwEXjMVaOzzlJU_YRLSYnPj7aAPmBY1359lVBb6-0g6V1CfJlvMwwKy79R5bEZZm9p9bLgZGlrbVSIn0v5J6Qh6MF_NUTstg7dx7SUSEcWfwUFEjBXXHYATTtpWgEysL-KJ0bqncoNViTLsJBMwLkFCskjVSYpF4NXBkmX8nQYmENSi_ayhVvqkytco25LWqbhCf58"
    },
    {
        id: "limbe-botanic",
        name: "Garden Flat Limbe",
        price: 20000,
        location: "Limbe, South West",
        landmark: "Down Beach",
        host: "Sarah",
        rating: 4.6,
        reviews: 15,
        amenities: ["AC", "Parking", "Sea View"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZVRSPkSlNlPN0q9_QC01wYxSryTHG6IOk_-DXHhj3VQhalteszU65XlfiMpwZfLF-To_FHgEzN3_ra_I94XOM7Hfi7Yt5edpdiddWKSApWrPxjxO4fSFXsOBGp88WgIC2tDNirPc8KQFQdJeI2rroqpjolUCROqwOCerx0fDcqMDK0wrnTfNFdHHUkEsZGJsLwObF0lISccQkbnmJzABx06s2r_4-NenyjIZiLvzGHI8oSGuGplvX7Uq-68oeY1sVfV50N3_XdUM"
    },
    {
        id: "bonapriso-luxury",
        name: "Luxury Apt Bonapriso",
        price: 45000,
        location: "Bonapriso, Douala",
        landmark: "Next to Energy Club",
        host: "Madame Solange",
        rating: 4.95,
        reviews: 200,
        amenities: ["Pool", "Gym", "Fiber Wifi", "Generator"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByURTbggjgnnU8ypICRJYVBV-N-sJ1bdblzgZ-76M1SnX8KW54BEEoGcpz4wjeJ8iYBRfxviSdxr1yGzAMnXnXWflNzE_RYvPAE9jDgEozXQmLpOhFiTzW4GItZ4OUZpd6ipag3I7p1UTFkqa7Agt6wcRXsG4h3pdSXLAPJVyHB4uweYDp42zYBUrVbym8U5c-CbtY1vOjnmEe7zRjIxdB6QGnwmmVZqAAbD2CJt_-oOfhW1nW2gITUa9e2Y_gL2S0PHLSelK2NxM"
    }
];// SangoStay Central Database
