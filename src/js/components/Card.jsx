import { Box} from "@mui/material"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const MyCard = () => {
	return (
		<Box sx={{margin: "5px", }}>
			
			<Card style={{ width: '18rem', height: '25rem', padding: "10px" }}>
				<Card.Img variant="top" src="https://picsum.photos/500/325" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Find Out More</Button>
				</Card.Body>
			</Card>



		</Box>

	);
};

