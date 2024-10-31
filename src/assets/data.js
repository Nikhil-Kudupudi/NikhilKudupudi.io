export const projects={
    HeartDisease:{
        Tenure: 2020,
        languages: "python",
        frameworks: "jupyter notebook",
        description: "In this project it utilizes cleaveland dataset to classify the heart diesease existence.multiple models were used and compared with accuracy, other metrics to get the better performing model",
        results:"Logistic Regression performed well when compared to other machine learning models",
        image:require("../assets/heart.jpeg"),
         tools: [
      require("../assets/icons/python.png"),// Path to Python icon
      require("../assets/icons/jupyter.png") // Path to Jupyter Notebook icon
    ]
    },
    AutonomousCarsSimulation:{
        Tenure: 2022,
        languages:"python",
        framework: "jupyter notebook",
        description: "This projects simulates the autonomous cars in the real world using the deep learning algorithms.We have generated the training images by playing the simulation and each frmae will be seperated into a image and will be trained on the model",
        results:"the model is not able to completely detect the road borders",
        image:require("../assets/car.jpeg"),
          tools: [
      require("../assets/icons/python.png"),// Path to Python icon
      require("../assets/icons/jupyter.png") // Path to Jupyter Notebook icon
    ]
    },
    
}