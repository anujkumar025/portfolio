import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WorkExp() {
  return (
    <>
      <div className="flex justify-start w-full text-lg sm:text-base">
        <div className="font-semibold">Work Experience</div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {/* AassPass Experience */}
        <Card className="bg-[#FFFFFFCC] cursor-pointer">
          <CardHeader>
            <CardTitle className="text-base sm:text-sm">
              AassPass – Backend Developer & Technical Co-Founder
            </CardTitle>
            <CardDescription className="text-sm sm:text-xs">
              April 2025 – Present · Delhi, India
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm sm:text-xs space-y-1">
            <p>• Developed the backend for a location-based web app using Express (TypeScript) and PostgreSQL with PostGIS.</p>
            <p>• Built RESTful APIs with MVC architecture, lowering development bugs.</p>
            <p>• Implemented JWT authentication and email services, improving onboarding speed by around 40%.</p>
            <p>• Created the admin backend for managing businesses, ads, and admins.</p>
            <p>• Advised on hosting and infrastructure; hold 7% equity for technical contributions.</p>
          </CardContent>
        </Card>

        {/* DRDO Internship */}
        <Card className="bg-[#FFFFFFCC] cursor-pointer">
          <CardHeader>
            <CardTitle className="text-base sm:text-sm">
              Defence Research and Development Organisation (DRDO) – Cryptography Intern
            </CardTitle>
            <CardDescription className="text-sm sm:text-xs">
              June 2024 – July 2024 · Delhi, India
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm sm:text-xs space-y-1">
            <p>• Simulated a secure TLS-like client-server communication protocol using sockets, RSA, and AES.</p>
            <p>• Built a custom handshake protocol to control encrypted session initialization.</p>
            <p>• Applied RSA for key exchange and AES for symmetric encryption in real-time communication.</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
