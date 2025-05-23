import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const PaymentFormSchema = z.object({
  paymentMethod: z.enum(["credit-card", "paypal", "stripe"]),
  cardHolderName: z.string().min(1, { message: "Card holder name is required" }).optional(),
  cardNumber: z.string().min(1, { message: "Card number is required" }).optional(),
  expiryDate: z.string().min(1, { message: "Expiry date is required" }).optional(),
  cvv: z.string().min(1, { message: "CVV is required" }).optional(),
});

type PaymentFormValues = z.infer<typeof PaymentFormSchema>;

interface PaymentFormProps {
  onSubmit: (data: PaymentFormValues) => void;
  totalAmount: string;
}

const PaymentForm = ({ onSubmit, totalAmount }: PaymentFormProps) => {
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<"credit-card" | "paypal" | "stripe">("credit-card");
  
  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(PaymentFormSchema),
    defaultValues: {
      paymentMethod: "credit-card",
      cardHolderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const handleSubmit = (data: PaymentFormValues) => {
    if (data.paymentMethod === "credit-card") {
      // Validate credit card fields
      if (!data.cardHolderName || !data.cardNumber || !data.expiryDate || !data.cvv) {
        toast({
          title: "Missing Information",
          description: "Please fill in all credit card details.",
          variant: "destructive",
        });
        return;
      }
    }
    
    onSubmit(data);
  };

  return (
    <div className="border-t border-neutral-200 pt-4">
      <h3 className="font-medium text-dark mb-4">Payment Details</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    className="flex flex-wrap gap-3 mb-4"
                    value={field.value}
                    onValueChange={(value: "credit-card" | "paypal" | "stripe") => {
                      field.onChange(value);
                      setPaymentMethod(value);
                    }}
                  >
                    <div className="flex items-center">
                      <RadioGroupItem value="credit-card" id="payment-credit-card" />
                      <Label htmlFor="payment-credit-card" className="ml-2">Credit / Debit Card</Label>
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="paypal" id="payment-paypal" />
                      <Label htmlFor="payment-paypal" className="ml-2">Paypal</Label>
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="stripe" id="payment-stripe" />
                      <Label htmlFor="payment-stripe" className="ml-2">Stripe</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {paymentMethod === "credit-card" && (
            <div className="border-t border-neutral-200 pt-4">
              <h4 className="font-medium text-dark mb-3">Payment With Credit Card</h4>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-6 bg-neutral-100 border border-neutral-200 rounded flex items-center justify-center">
                  <i className="fab fa-cc-visa text-blue-700"></i>
                </div>
                <div className="w-10 h-6 bg-neutral-100 border border-neutral-200 rounded flex items-center justify-center">
                  <i className="fab fa-cc-mastercard text-red-500"></i>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="cardHolderName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Holder Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter name on card" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input placeholder="**** **** **** 2547" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name="expiryDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiry Date</FormLabel>
                          <FormControl>
                            <Input placeholder="MM/YY" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name="cvv"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVV</FormLabel>
                          <FormControl>
                            <Input placeholder="***" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <Button 
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-md transition mt-6"
          >
            Confirm & Pay {totalAmount}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PaymentForm;
