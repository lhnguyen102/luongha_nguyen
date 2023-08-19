import {
    machine_learning,
    neural,
    cplusplus,
    python,
    javascript,
    reactjs,
    git,
    docker,
    pytorch,
    azure,
    aws,
    cuda,
    kubernetes,
    sql,
    flightgear,
    jsbsim,
    shearwater,
    air,
    polytechnique,
    cutagi,
    hsi,
    openbdlm,
    tftforecast,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Work Experience",
    },
    {
      id: "publication",
      title: "Publication",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AI/ML Developer",
      icon: machine_learning,
    },
    {
      title: "AI/ML Researcher",
      icon: neural,
    },
    {
      title: "C++/CUDA Developer",
      icon: cplusplus,
    },
    {
      title: "Python Developer",
      icon: python,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cplusplus,
    },
    {
      name: "CUDA",
      icon: cuda,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Pytorch",
      icon: pytorch,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "PostgreSQL",
      icon: sql,
    },
    {
      name: "Flightgear",
      icon: flightgear,
    },
    {
      name: "JSBsim",
      icon: jsbsim,
    },
  ];
  
  const experiences = [
    {
      title: "AI/ML Developer",
      company_name: "AI Redefined",
      icon: air,
      iconBg: "#E6DEDD",
      date: "July 2022 - Present",
      points: [
        "Design, develop, and maintain machine learning pipelines.",
        "Train and operate various models such as time series forecasting, anomaly detection, and reinforcement learning.",
        "Incorporate human feedback and demonstrations to finetune models.",
        "Contribute to and drive research initiatives both internally and with external partners.",
      ],
    },
    {
      title: "AI/ML Research Associate",
      company_name: "Polytechnique Montreal",
      icon: polytechnique,
      iconBg: "#E6DEDD",
      date: "May 2022 - Present",
      points: [
        "Develop an efficient learning paradigm for deep neural networks aimed at improving accuracy and training time.",
        "Lead the development of the open-source software, pyTAGI, a Python interface connecting to the C++/CUDA backend (cuTAGI) for Bayesian neural networks.",
      ],
    },
    {
      title: "AI/ML Developer",
      company_name: "Shearwater Aerospace",
      icon: shearwater,
      iconBg: "#E6DEDD",
      date: "September 2021 - June 2022",
      points: [
        "Designed and implemented a machine learning-based path planning system for Unmanned Aerial Vehicles (UAVs), significantly improving flight efficiency.",
        "Developed autonomous control system based on reinforcement learning for Unmanned Aerial Vehicles.",
      ],
    },
    
    {
      title: "Postdoctoral Researcher",
      company_name: "Polytechnique Montreal",
      icon: polytechnique,
      iconBg: "#E6DEDD",
      date: "November 2019 - September 2021",
      points: [
        "Formulated a theoretical approach for modeling uncertainty in neural networks.",
        "Led the development of the C++/CUDA open-source software cuTAGI for modelling uncertaities in deep neural networks.",
        "Implemented and tested the proposed approach on various learning tasks.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "TBD",
      name: "James-A. Goulet",
      designation: "Full Professor",
      company: "Polytechnique Montreal",
    },
    {
      testimonial:
        "TDB",
      name: "Omar Halbouni",
      designation: "Full-stack developer",
      company: "AI Redefined",
    },
    {
      testimonial:
        "TDB",
      name: "TBD",
      designation: "TBD",
      company: "TBD",
    },
  ];
  
  const projects = [
    {
      name: "cuTAGI",
      description:
        "cuTAGI: An open-source Bayesian neural network developed in C++/CUDA. It quantifies uncertainty in deep neural networks for supervised, unsupervised, and reinforcement learning tasks, enhancing output reliability and accuracy",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "CUDA",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: cutagi,
      source_code_link: "https://github.com/lhnguyen102/cuTAGI",
    },
    {
      name: "Transformer Temporal Fusion",
      description:
        "Implementation of the Transformer Temporal Fusion (TFT) method, leveraging self-attention mechanisms for enhanced accuracy and detailed explainability in time series forecasting",
      tags: [
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: tftforecast,
      source_code_link: "https://github.com/lhnguyen102/tft-sgd",
    },
    {
      name: "Hidden-States Inference ",
      description:
        "In this project, we demonstrate using tractable approximate Gaussian inference (TAGI) to infer network hidden states, not just neural network parameters. A key novelty is inferring hidden states with constraints for specific objectives.",
      tags: [
        {
          name: "Matlab",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: hsi,
      source_code_link: "https://github.com/CivML-PolyMtl/TAGI_HS_Inference_JMLR",
    },
    {
      name: "OpenBDLM",
      description:
        "OpenBDLM is a Matlab open-source software developed to use Bayesian Dynamic Linear Models for time series analysis. OpenBDLM is capable to process simultaneously several time series data to interpret, monitor and predict their long-term behavior.",
      tags: [
        {
          name: "Matlab",
          color: "blue-text-gradient",
        },
      ],
      image: openbdlm,
      source_code_link: "https://github.com/CivML-PolyMtl/OpenBDLM",
    },
  ];

  const publications = [
    {
      title: "Hiking up that HILL with Cogment-Verse: Train & Operate Multi-agent Systems Learning from Humans",
      authors: "Sai Krishna Gottipati, Luong-Ha Nguyen, Clodéric Mars, and Matthew E Taylor",
      journal: "AAMAS",
      year: 2023,
      link: "https://www.southampton.ac.uk/~eg/AAMAS2023/pdfs/p3065.pdf",
    },

    {
      title: "Analytically Tractable Hidden-States Inference in Bayesian Neural Networks",
      authors: "Luong-Ha Nguyen and James-A. Goulet",
      journal: "JMLR",
      year: 2022,
      link: "https://www.jmlr.org/papers/volume23/21-0758/21-0758.pdf",
    },
    {
      title: "Tractable Approximate Gaussian Inference for Bayesian Neural Networks",
      authors: "Luong-Ha Nguyen, James-A. Goulet, Saeid Amiri",
      journal: "JMLR",
      year: 2021,
      link: "https://www.jmlr.org/papers/volume22/20-1009/20-1009.pdf",
    },
    {
      title: "Analytically Tractable Inference in Neural Networks-An Alternative to Backpropagation",
      authors: "Luong-Ha Nguyen and James-A. Goulet",
      journal: "Bayesian Deep Learning workshop, NeurIPS",
      year: 2021,
      link: "http://bayesiandeeplearning.org/2021/papers/5.pdf",
    },
    {
      title: "Analytically Tractable Inference in Neural Networks – An Alternative to Backpropagation",
      authors: "Luong-Ha Nguyen and James-A. Goulet",
      journal: "Probabilistic Modeling workshop, UAI",
      year: 2021,
      link: "https://openreview.net/pdf?id=KmQSxgmaZuf",
    },
    {
      title: "Real‐time anomaly detection with Bayesian dynamic linear models",
      authors: "Luong-Ha Nguyen and James-A. Goulet",
      journal: "Structural Control and Health Monitoring",
      year: 2019,
      link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/stc.2404",
    },
    {
      title: "Uncertainty Quantification for Model Parameters and Hidden States in Bayesian Dynamic Linear Models",
      authors: "Luong-Ha Nguyen, Ianis Gaudot, and James-A. Goulet",
      journal: "Structural Control and Health Monitoring",
      year: 2019,
      link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/stc.2309",
    },
    {
      title: "A kernel-based method for modeling non-harmonic periodic phenomena in Bayesian dynamic linear models",
      authors: "Luong-Ha Nguyen and James-A. Goulet",
      journal: "Frontiers in Built Environment",
      year: 2019,
      link: "https://www.frontiersin.org/articles/10.3389/fbuil.2019.00008/full",
    },
    {
      title: "Anomaly detection with the switching kalman filter for structural health monitoring",
      authors: "Luong-Ha Nguyen and James-A. Goulet",
      journal: "Structural Control and Health Monitoring",
      year: 2018,
      link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/stc.2136",
    },
    
  ]
  
  export { services, technologies, experiences, testimonials, projects, publications };