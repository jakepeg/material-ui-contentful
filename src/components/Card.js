import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Cardy = (props) => {
    console.log(props)
    return(
        <div>
            { props.card ? (
                <Card elevation="6">
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={props.card.fields.image.fields.file.url}
                    title={props.card.fields.title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.card.fields.title}
                    </Typography>
                    <Typography component="p">
                        {props.card.fields.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" href={props.card.fields.url} target="_blank">
                        Go To Website
                    </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}

export default Cardy