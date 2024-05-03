import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
type ProjectType = {
    title: string,
    imgSrc: string,
    sourceCode: string,
    deployedLink: string
}
export default function CardContainer({ project }: { project: ProjectType }) {
    return <Card sx={{ width: 300 }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {project.title || ""}
            </Typography>
            <CardMedia
                sx={{ height: 140 }}
                image={project.imgSrc || ""}
                title={project.title || ""}
            />
            {/* <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography> */}
        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => window.open(project.sourceCode)}>Source</Button>
            <Button size="small" onClick={() => window.open(project.deployedLink)}>Live</Button>
        </CardActions>
    </Card>
}