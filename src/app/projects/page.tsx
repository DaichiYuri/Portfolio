'use client'
import Dummy from '../../../components/Dummy'
import ProjectTile from '../../../components/ProjectTile'

export default function Project() {
    return (
        <Dummy comp={<>
            <h1 className="text-3xl lg:text-4xl font-bold text-center">Projects</h1>
            <ListProject/>
            </>
    }/>
    );
}

function ListProject(){
    const projects = [
        {
            title: "Smart Glove based Virtual Computing Workspace",
            year: "2022",
            location: "Pondicherry [PTU]]",
            image: "/projects/virtual_workspace.png",
            description: "Achieved 99% accuracy in Liver tumor segmentation using PyTorch (ResNet, U-Net), with 99.54% volumetric accuracy via Marching Cubes. Predicted survival probabilities",
            // github: "https://github.com/AshishSingh2261/Ingenium_NeurAi",
            demo: "https://devpost.com/software/brain-tumor-segmentation-and-3d-reconstruction",
            tags: ["Final Project"],
        },
        {
            title: "Conversational Chatbot Builder",
            year: "2022",
            location: "Bangalore [Smart India Hackathon]",
            image: "/projects/sih.png",
            description: "Achieved 99% accuracy in Liver tumor segmentation using PyTorch (ResNet, U-Net), with 99.54% volumetric accuracy via Marching Cubes. Predicted survival probabilities",
            // github: "https://github.com/AshishSingh2261/Ingenium_NeurAi",
            demo: "https://devpost.com/software/brain-tumor-segmentation-and-3d-reconstruction",
            tags: ["Hackathon","SIH"],
        },
        {
            title: "Liver Tumour Segmentation",
            year: "2022",
            location: "Pondicherry [JIPMER]",
            image: "/projects/lits.png",
            description: "Achieved 99% accuracy in Liver tumor segmentation using PyTorch (ResNet, U-Net), with 99.54% volumetric accuracy via Marching Cubes. Predicted survival probabilities",
            // github: "https://github.com/AshishSingh2261/Ingenium_NeurAi",
            demo: "https://devpost.com/software/brain-tumor-segmentation-and-3d-reconstruction",
            tags: ["Hospital","JIPMER"],
        },
        {
            title: "Smart COVID Surveillance",
            year: "2021",
            location: "Pondicherry [PTU]",
            image: "/projects/smart_covid.png",
            description: "Achieved 99% accuracy in brain tumor segmentation using PyTorch (ResNet, U-Net), with 99.54% volumetric accuracy via Marching Cubes. Predicted survival probabilities",
            // github: "https://github.com/AshishSingh2261/Ingenium_NeurAi",
            demo: "https://devpost.com/software/brain-tumor-segmentation-and-3d-reconstruction",
            tags: ["Hackathon"],
        },
        {
            title: "Brain Tumour Segmentation and 3D Reconsihstruction",
            year: "2021",
            location: "Remote [Amrita School Of Engineering]",
            image: "/projects/brats1.png",
            description: "A secure code practicing platform with creator space.",
            github: "https://github.com/AshishSingh2261/Ingenium_NeurAi",
            demo: "https://devpost.com/software/brain-tumor-segmentation-and-3d-reconstruction",
            tags: ["Hackathon", "Winner"],
        },
    ];
    return(
        <div className='px-6'>
            {projects.map((project, index) => (
                <ProjectTile key={index} project={project} />
            ))}
        </div>
    );
}