import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
type ProjectType = {
    id: string,
    title: string,
    imgSrc: string,
    sourceCode: string,
    deployedLink: string
}
export default function CardContainer({ project, setDeleteProjectModal, setProjectId }: { project: ProjectType, setDeleteProjectModal: any, setProjectId: any }) {
    return <Card sx={{ width: 300 }}>
        <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
                width: "inherit",
                justifyContent: "end"
            }}
            onClick={() => {
                setDeleteProjectModal(true);
                setProjectId(project.id);
                //deleteProjectFromDB(project.id)
            }}
        >
            <DeleteIcon style={{ color: 'rgb(239, 160, 13)' }} />
        </IconButton>
        <CardContent sx={{ padding: "0 16px" }}>
            <Typography gutterBottom variant="h5" component="div" sx={{
                maxWidth: '100%',
                fontSize: '1.5rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            }}>
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
        <CardActions sx={{ padding: "3px 8px", justifyContent: "space-around" }}>
            <Button style={{ color: 'rgb(239, 160, 13)' }} size="small" onClick={() => window.open(project.sourceCode)}>Source</Button>
            <Button style={{ color: 'rgb(239, 160, 13)' }} size="small" onClick={() => window.open(project.deployedLink)}>Live</Button>
        </CardActions>
    </Card >
}