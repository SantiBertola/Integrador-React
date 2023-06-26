import {
    FoundContainerStyled, FoundSubtitleStyled, FoundTextStyled, FoundTitleStyled,
} from './NotFoundStyles';
import GIF from '../../assets/img/giphy.gif'

const PageNotFound = () => {
    return (
        <div>
            <FoundContainerStyled>
                <FoundTextStyled>
                    <FoundTitleStyled>404 Error</FoundTitleStyled>
                    <FoundSubtitleStyled>Oops, parece que erraste el game-winner</FoundSubtitleStyled>
                    <FoundSubtitleStyled> Parece que la página que buscás no existe o fue removida</FoundSubtitleStyled>
                </FoundTextStyled>
                <img src={GIF} alt='GIF'/>
            </FoundContainerStyled>
        </div>
    );
};

export default PageNotFound;