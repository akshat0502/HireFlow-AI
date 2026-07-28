package com.hireflow.ai;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Component
public class PdfExtractor {

    public String extractText(MultipartFile file) {

        try {

            return extractText(file.getBytes());

        } catch (IOException e) {

            throw new RuntimeException(e);

        }

    }

    public String extractText(byte[] pdfBytes) {

        try (PDDocument document =
                     Loader.loadPDF(pdfBytes)) {

            PDFTextStripper stripper =
                    new PDFTextStripper();

            return stripper.getText(document);

        } catch (IOException e) {

            throw new RuntimeException(
                    "Unable to extract PDF text",
                    e
            );

        }

    }

}