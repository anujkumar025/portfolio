import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const Items = [
  {
    link: "https://www.aasspass.co.in/",
    text: {
      title: "AassPass – Backend Developer & Technical Co-Founder",
      desc: "April 2025 – Present · Delhi, India",
      para: [
        "Developed the backend for a location-based web app using Express (TypeScript) and PostgreSQL with PostGIS.",
        "Built RESTful APIs with MVC architecture, lowering development bugs.",
        "Implemented JWT authentication and email services, improving onboarding speed by around 40%.",
        "Created the admin backend for managing businesses, ads, and admins.",
        "Advised on hosting and infrastructure; hold 7% equity for technical contributions.",
      ],
    }
  },

  {
    link: "https://github.com/anujkumar025/chat_app",
    text: {
      title:
        "Defence Research and Development Organisation (DRDO) – Cryptography Intern",
      desc: "June 2024 – July 2024 · Delhi, India",
      para: [
        "Simulated a secure TLS-like client-server communication protocol using sockets, RSA, and AES.",
        "Built a custom handshake protocol to control encrypted session initialization.",
        "Applied RSA for key exchange and AES for symmetric encryption in real-time communication.",
      ],
    },
  },
]

export default function WorkExp() {
  return (
    <>
      <div className="flex justify-start w-full text-lg sm:text-base mb-4">
        <div className="font-semibold">Work Experience</div>
      </div>

      <div className="flex flex-col gap-4">
        {Items.map((item, index) => (
          <Card key={index} className=" bg-[#FFFFFFCC]">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <CardHeader>
                <CardTitle className="text-base sm:text-sm">{item.text.title}</CardTitle>
                <CardDescription className="text-sm sm:text-xs">{item.text.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-1 text-sm sm:text-xs">
                  {item.text.para.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </a>
          </Card>
        ))}
      </div>
    </>
  );
}
