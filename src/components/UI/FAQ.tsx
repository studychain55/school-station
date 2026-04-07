import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQItem[];
  title?: string;
};

export default function FAQ({ items, title = "よくある質問" }: Props) {
  if (items.length === 0) return null;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: "1.25rem" }}>
        {title}
      </Typography>
      {items.map((item, i) => (
        <Accordion key={i} disableGutters sx={{ "&:before": { display: "none" }, mb: 1, border: "1px solid #E0E0E0" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ fontWeight: 600, fontSize: { xs: 13, sm: 14 } }}
          >
            {item.question}
          </AccordionSummary>
          <AccordionDetails sx={{ borderTop: "1px solid #F0F0F0" }}>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#424242" }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
