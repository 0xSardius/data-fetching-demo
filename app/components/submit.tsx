"use client";

import {useFormStatus} from "react-dom";

export const Submit = () => {
    const {pending} = useFormStatus();
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button 
            type="submit" 
            disabled={pending}
            style={{ 
              padding: "12px 24px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              minWidth: "140px"
            }}>
            {pending ? "Submitting..." : "Submit"}
          </button>
        </div>
    )
}

