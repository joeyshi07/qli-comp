export const articles = [
  {
    title: "ESM-2 And Variant Classification",
    author: "Student Author",
    description:
      "We all know of ChatGPT, a language learning model trained to string connections between information. This can now be applied to protein sequences as well---and medical implications along with it.",
    imageLink:
      "https://cdn-uploads.huggingface.co/production/uploads/64191ec8d459c9e7fbb0236b/0dYECOEFeLCSLwo5KSYAI.png",
    content: `
    <p>When attempting to uncover the proportion of the possible mutations in inherited disease genes that are disease causing, the process is very difficult as it relies on many factors, such as the type and location of the mutation (Cooper et al., 2010). Most recent variant effect predictor (VEP) methods utilize protein language models (PLMs), generative models based on Transformers. Transformers is a neural network architecture used for generative modeling, often found in language learning models (eg. ChatGPT, a “generative pretraining transformer”). PLMs are functionally the same, but instead of learning patterns between words, they “speak the language of proteins.  One of them is Meta’s latest ESM (Evolutionary Scale Modeling) model, a family of deep learning models that are trained on large-scale protein sequence databases to make protein structure and variant effect predictions (Lin et al., 2022).</p>
   <br>
    <p>PLMs have provided great aid in the development of more accurate and efficient novel computational methods, only having been used since 2021. ESM-2 is by far the protein language model with the best performance, developed to date pretrained on the most amount of protein sequences at 250 million, including 8.6 billion amino acids (Lin et al., 2022). The model can be transferred across domains and greatly capture a broad context on the organization of sequences and natural patterns (Rives et al., 2021). This allows it to not only be applied to classifying variants, but a plethora of other studies involving protein function (Schmirler et al., 2024). Researchers note that the protein model may see patterns that seem unintuitive on first glance, similar to how chess bots sometimes play seemingly strange lines that have a calculated advantage way down the line (Hie et al., 2024). In these models, amino acid character sequences are inputted as “tokens” to learn patterns, each character being treated like words in a language. </p>
<br>
    <p>Training for transformers is done through the masked language model approach, predicting the identity of random “masked” amino acids through context given in the rest of the sequence, before being converted to probabilities. The model is punished for each incorrect prediction (Zhan & Zhang, 2023). ESM models have been shown to be able to outperform existing methods in classifying missense variants (one-on-one amino acid substitutions) as pathogenic or benign and handling complex variants (Brandes et al., 2023).  Previous studies have been done on disease-specific variant prediction on inherited heart conditions, where researchers investigated the effectiveness of a fine-tuned model on predicting the missense variants of closely related diseases such as cardiomyopathies and inherited arrhythmia syndrome (Zhang et al., 2021).</p>
    <br>
    <p>Through generating better VEP methods and improving the accuracy of genetic variant predictions on disease risk, there can be major improvements made in clinical screenings and diagnostic accuracy, which is pivotal to clinical decision-making (Zhang et al., 2021). 
</p>
<br><br><br>
<h3>References</h3>
<p>Brandes, N., Goldman, G., Wang, C. H., Ye, C. J., & Ntranos, V. (2023). Genome-wide prediction of disease variant effects with a deep protein language model. Nature Genetics, 55(9), 1512–1522. https://doi.org/10.1038/s41588-023-01465-0</p>
<br>
<p>Cooper, D. N., Chen, J.-M., Ball, E. V., Howells, K., Mort, M., Phillips, A. D., Chuzhanova, N., Krawczak, M., Kehrer-Sawatzki, H., & Stenson, P. D. (2010). Genes, mutations, and human inherited disease at the dawn</p>
<br>
<p>Hie, B. L., Shanker, V. R., Xu, D., Bruun, T. U. J., Weidenbacher, P. A., Tang, S., Wu, W., Pak, J. E., & Kim, P. S. (2024). Efficient evolution of human antibodies from general protein language models. Nature Biotechnology, 42(2), 275–283. https://doi.org/10.1038/s41587-023-01763-2 </p>
<br>
<p>Lin, Z., Akin, H., Rao, R., Hie, B., Zhu, Z., Lu, W., Smetanin, N., Verkuil, R., Kabeli, O., Shmueli, Y., Costa, A. dos S., Fazel-Zarandi, M., Sercu, T., Candido, S., & Rives, A. (2022). Evolutionary-scale prediction of atomic level protein structure with a language model (p. 2022.07.20.500902). bioRxiv. https://doi.org/10.1101/2022.07.20.500902</p>
<br>
<p>Rives, A., Meier, J., Sercu, T., Goyal, S., Lin, Z., Liu, J., Guo, D., Ott, M., Zitnick, C. L., Ma, J., & Fergus, R. (2021). Biological structure and function emerge from scaling unsupervised learning to 250 million protein sequences. Proceedings of the National Academy of Sciences, 118(15), e2016239118. https://doi.org/10.1073/pnas.2016239118</p>
<br>
<p>Schmirler, R., Heinzinger, M., & Rost, B. (2024). Fine-tuning protein language models boosts predictions across diverse tasks. Nature Communications, 15(1), 7407. https://doi.org/10.1038/s41467-024-51844-2</p>
<br>
<p>Zhan, H., & Zhang, Z. (2023). ProPath: Disease-Specific Protein Language Model for Variant Pathogenicity (arXiv:2311.03429). arXiv. https://doi.org/10.48550/arXiv.2311.03429</p>
<br>
<p>Zhang, X., Walsh, R., Whiffin, N., Buchan, R., Midwinter, W., Wilk, A., Govind, R., Li, N., Ahmad, M., Mazzarotto, F., Roberts, A., Theotokis, P. I., Mazaika, E., Allouba, M., Marvao, A. de, Pua, C. J., Day, S. M., Ashley, E., Colan, S. D., … Ware, J. S. (2021). Disease-specific variant pathogenicity prediction significantly improves variant interpretation in inherited cardiac conditions. Genetics in Medicine, 23(1), 69–79. https://doi.org/10.1038/s41436-020-00972-3</p>


</p>
    `,
  },
  {
    title: "*Coming Soon* AlphaFold2 and the Protein Folding Problem",
    author: "Student Author",
    description:
      "AlphaFold2, a deep learning algorithm developed by researchers at Google Deepmind, can more accurately predict the 3D shape of a protein, providing a solution for a problem decades old. ",
    imageLink:
      "https://miro.medium.com/v2/resize:fit:739/1*zSTtnh1b7H7auwaiFoAOuQ.jpeg",
    content: `<p>Article currently in process of being researched and written, stay tuned!</p> `,
  },
];
