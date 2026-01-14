import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NewsletterSubscribeRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: NewsletterSubscribeRequest = await req.json();

    console.log("Sending newsletter confirmation to:", email);

    // Validate email
    if (!email || !email.includes("@")) {
      console.error("Invalid email provided:", email);
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const emailResponse = await resend.emails.send({
      from: "ClearSet.AI <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to ClearSet.AI Newsletter!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a0c10; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0c10; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #111318; border-radius: 16px; border: 1px solid #1f2937; overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 40px 40px 20px; text-align: center;">
                      <div style="display: inline-block; width: 60px; height: 60px; background: linear-gradient(135deg, #00e5cc, #00b8a3); border-radius: 12px; line-height: 60px; font-size: 28px; font-weight: bold; color: #0a0c10;">C</div>
                      <h1 style="color: #ffffff; font-size: 28px; margin: 20px 0 10px; font-weight: 700;">
                        ClearSet<span style="color: #00e5cc;">.AI</span>
                      </h1>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 20px 40px 40px;">
                      <h2 style="color: #00e5cc; font-size: 24px; margin: 0 0 20px; text-align: center;">
                        Welcome to Our Newsletter! 🎉
                      </h2>
                      
                      <p style="color: #9ca3af; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                        Thank you for subscribing to the ClearSet.AI newsletter! You're now part of our community of forward-thinking professionals interested in the latest AI developments.
                      </p>
                      
                      <p style="color: #9ca3af; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                        Here's what you can expect from us:
                      </p>
                      
                      <ul style="color: #9ca3af; font-size: 16px; line-height: 1.8; margin: 0 0 30px; padding-left: 20px;">
                        <li>Latest AI trends and insights</li>
                        <li>Industry best practices</li>
                        <li>Exclusive tips for leveraging AI in your business</li>
                        <li>Updates on our services and solutions</li>
                      </ul>
                      
                      <div style="text-align: center; margin: 30px 0;">
                        <a href="https://clearset.ai" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #00e5cc, #00b8a3); color: #0a0c10; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                          Visit Our Website
                        </a>
                      </div>
                      
                      <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 30px 0 0; text-align: center;">
                        If you didn't subscribe to this newsletter, you can safely ignore this email.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px 40px; background-color: #0d0f14; border-top: 1px solid #1f2937;">
                      <p style="color: #6b7280; font-size: 12px; margin: 0; text-align: center;">
                        © ${new Date().getFullYear()} ClearSet.AI. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-newsletter-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
