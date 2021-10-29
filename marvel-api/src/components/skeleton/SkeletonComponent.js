import {StyledSkeleton} from "./styles";

export const SkeletonComponent = ({width="100%", height="100%", number= 2}) => {
    return number ? ([...Array(number)].map(
        (skeleton,idx) => (
            <StyledSkeleton
                width={width}
                height={height}
                key={idx}
            />)))
        : <StyledSkeleton
            width={width}
            height={height}
            />;
}