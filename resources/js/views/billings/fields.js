import { ref } from "vue";
import { langTitle } from "@/hooks/use-common";

const fields = () => {
    const tabMapOptions = [
        { label: langTitle("invoice"), key: "invoice" },
        { label: langTitle("statement"), key: "statement" },
        { label: langTitle("payment_history"), key: "payment_history" },
    ];

    const activeName = ref("invoice");

    const dummyCharges = [
        {
            id: 1,
            categories: "Management Fees",
            total: 1600,
            children: [
                {
                    id: 1,
                    date: "10 Apr 2021",
                    total: "280",
                    invoice_no: "#289124924924",
                    details: [
                        {
                            id: 1,
                            description: "Car parking charges in April 2021",
                            amount: "30",
                        },
                        {
                            id: 2,
                            description: "Service charge",
                            amount: "250",
                        },
                    ],
                },
                {
                    id: 2,
                    date: "2 Apr 2021",
                    total: "280",
                    invoice_no: "#289124924925",
                    details: [
                        {
                            id: 3,
                            description: "Car parking charges in April 2021",
                            amount: "30",
                        },
                        {
                            id: 4,
                            description: "Service charge",
                            amount: "250",
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            categories: "Utility Fees",
            total: 1600,
            children: [
                {
                    id: 3,
                    date: "10 Apr 2021",
                    total: "280",
                    invoice_no: "#289124924924",
                    details: [
                        {
                            id: 5,
                            description: "Car parking charges in April 2021",
                            amount: "30",
                        },
                        {
                            id: 6,
                            description: "Service charge",
                            amount: "250",
                        },
                    ],
                },
                {
                    id: 4,
                    date: "2 Apr 2021",
                    total: "280",
                    invoice_no: "#289124924925",
                    details: [
                        {
                            id: 7,
                            description: "Car parking charges in April 2021",
                            amount: "30",
                        },
                        {
                            id: 8,
                            description: "Service charge",
                            amount: "250",
                        },
                    ],
                },
            ],
        },
    ];

    const dummyStatements = [
        {
            id: 0,
            title: "A-01-11: CPR Apr 2022, SF APR 2022",
            amount: "-227",
            invoice_no: "PMISOON9621",
            date: "10 Apr 2021",
        },
        {
            id: 1,
            title: "Service Change",
            amount: "-227",
            invoice_no: "PMISOON9621",
            date: "10 Apr 2021",
        },
        {
            id: 2,
            title: "Sinking Fund",
            amount: "-227",
            invoice_no: "PMISOON9621",
            date: "10 Apr 2021",
        },
        {
            id: 3,
            title: "Sinking Fund",
            amount: "-227",
            invoice_no: "PMISOON9621",
            date: "10 Apr 2021",
        },
        {
            id: 4,
            title: "Sinking Fund",
            amount: "-227",
            invoice_no: "PMISOON9621",
            date: "10 Apr 2021",
        },
        {
            id: 5,
            title: "Sinking Fund",
            amount: "-227",
            invoice_no: "PMISOON9621",
            date: "10 Apr 2021",
        },
        {
            id: 6,
            title: "Sinking Fund",
            amount: "-227",
            invoice_no: "PMISOON9621",
            date: "10 Apr 2021",
        },
    ];

    return {
        tabMapOptions,
        activeName,
        dummyCharges,
        dummyStatements,
    };
};

export default fields;
