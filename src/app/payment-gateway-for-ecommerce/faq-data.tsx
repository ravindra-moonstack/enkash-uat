import { TFAQProps } from "@/src/types/faq"
import Link from "next/link"

const faqData: TFAQProps[] = [
    {
        question: "What is an e-commerce payment gateway?",
        answerHTML: (
            <p>
                An e-commerce payment gateway is a secure technology that facilitates{" "}
                <Link href="https://www.enkash.com/resources/blog/online-payment-processing" className="color-equity-blue">
                    online payment processing
                </Link>{" "}
                between customers, businesses, and banks. It authorizes online transactions in real time and encrypts sensitive data like card details and net banking information of the user to ensure safe and reliable payments.
            </p>
        ),
    },
    {
        question: "Which type of e-commerce uses a payment gateway?",
        answerHTML: (
            <p>
                Almost all types of e-commerce businesses use a payment gateway to accept{" "}
                <Link href="/glossary/online-payment" className="color-equity-blue">
                    online payments
                </Link>
                . This includes B2B, B2C, and D2C businesses, as payment gateways enable secure, fast, and seamless transactions between customers and businesses.
            </p>
        ),
    },
    {
        question: "Can I run an e-commerce business without a payment gateway?",
        answerHTML: (
            <>
                <p>
                    Yes, you can run an e-commerce business without any traditional payment gateway. You can accept payments via different methods, such as cash on delivery (COD), direct bank transfers,{" "}
                    <Link href="/glossary/qr-code" className="color-equity-blue">
                        QR codes
                    </Link>
                    , and payment links. However, it is not recommended. Without a payment gateway, managing and tracking transactions becomes difficult, reconciliation takes more time, and the risk of errors increases. You also miss out on online card payments, which are a major part of consumer preference today, as consumers use credit cards to make online purchases on e-commerce platforms.
                </p>
                <p>
                    For a smooth, scalable, and secure checkout experience, using a payment gateway is the better choice for most e-commerce businesses.
                </p>
            </>
        ),
    },
    {
        question: "Can you bypass a payment gateway on an e-commerce website?",
        answer: [
            {
                heading: "No, you cannot bypass a payment gateway on an e-commerce website for legitimate online transactions. A payment gateway is essential to securely process payments, encrypt customer data, and comply with regulations set by the Reserve Bank of India (RBI) and card networks. Attempting to bypass it can expose your business to fraud, data breaches, and legal risks, and may lead to payment failures or penalties."
            },
            {
                heading: "Instead, businesses can optimize costs and performance by choosing the right payment gateway, using smart routing, and negotiating transaction fees with providers."
            }
        ]
    },
    {
        question: "How do you use a payment gateway in e-commerce?",
        answerHTML: (
            <p>
                To use a payment gateway in an e-commerce website, you need to integrate it with your store using APIs or plugins (for platforms like Shopify or WooCommerce). Once integrated, customers can select their preferred payment method, such as{" "}
                <Link href="/glossary/upi-unified-payments-interface" className="color-equity-blue">
                    UPI
                </Link>
                , cards, or net banking, at checkout. The payment gateway securely processes the transaction, verifies details with the bank, and confirms the payment in real time, allowing you to complete the order smoothly.
            </p>
        ),
    },
    {
        question: "What are the payment gateway charges for an e-commerce website?",
        answerHTML: (
            <p>
                Payment gateway charges for an e-commerce website usually range between 1% to 3% per transaction, depending on payment method, monthly volume, industry type, and provider terms. Additional fees may apply for international payments or premium services. Businesses with higher transaction volumes can often negotiate better rates. To get the best payment gateway pricing for your store,{" "}
                <Link href="/contact-us" className="color-equity-blue font-bold">
                    contact us today
                </Link>
                .
            </p>
        ),
    },
]

export default faqData
