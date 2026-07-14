import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { copy, nav } from "@vcws/content/eco2zero";
import type { Lang } from "@vcws/content";
import { t } from "@vcws/content";
import { colors, radii, space, typography } from "@vcws/design-tokens";

export default function App() {
  const [lang, setLang] = useState<Lang>("en");

  const metrics = useMemo(
    () => copy.home.impactPreview.metrics,
    [],
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.brand}>{t(copy.brand, lang)}</Text>
          <View style={styles.langToggle}>
            {(["en", "zh"] as const).map((code) => (
              <Pressable
                key={code}
                onPress={() => setLang(code)}
                style={[styles.langBtn, lang === code && styles.langBtnActive]}
              >
                <Text
                  style={[
                    styles.langText,
                    lang === code && styles.langTextActive,
                  ]}
                >
                  {code === "en" ? "EN" : "中"}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <Text style={styles.eyebrow}>{t(copy.pathToZero, lang)}</Text>
        <Text style={styles.headline}>{t(copy.home.heroHeadline, lang)}</Text>
        <Text style={styles.sub}>{t(copy.home.heroSub, lang)}</Text>

        <View style={styles.actions}>
          <View style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>{t(copy.home.join, lang)}</Text>
          </View>
          <View style={styles.ghostBtn}>
            <Text style={styles.ghostBtnText}>{t(copy.home.learn, lang)}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          {t(copy.home.impactPreview.title, lang)}
        </Text>
        <View style={styles.metrics}>
          {metrics.map((metric) => (
            <View key={metric.en} style={styles.metricCard}>
              <Text style={styles.metricValue}>{metric.sample}</Text>
              <Text style={styles.metricLabel}>
                {t({ en: metric.en, zh: metric.zh }, lang)}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>{t(copy.home.stepsTitle, lang)}</Text>
        {copy.home.steps.map((step, index) => (
          <View key={step.title.en} style={styles.stepCard}>
            <Text style={styles.stepIndex}>0{index + 1}</Text>
            <Text style={styles.stepTitle}>{t(step.title, lang)}</Text>
            <Text style={styles.stepBody}>{t(step.body, lang)}</Text>
          </View>
        ))}

        <Text style={styles.quote}>“{t(copy.home.storyQuote, lang)}”</Text>
        <Text style={styles.attribution}>
          {t(copy.home.storyAttribution, lang)}
        </Text>

        <Text style={styles.parent}>{t(copy.parentOrg, lang)}</Text>
        <Text style={styles.navHint}>
          {nav.map((item) => t(copy.nav[item.key], lang)).join(" · ")}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.seaInk,
  },
  container: {
    padding: space[6],
    paddingBottom: space[16],
    gap: space[3],
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: space[4],
  },
  brand: {
    color: colors.foam,
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
  },
  langToggle: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: radii.none,
    borderWidth: 1,
    borderColor: "rgba(247,251,248,0.2)",
    padding: 0,
  },
  langBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: radii.none,
  },
  langBtnActive: {
    backgroundColor: colors.ecoLeaf,
  },
  langText: {
    color: colors.seaSoft,
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
  },
  langTextActive: {
    color: colors.foam,
  },
  eyebrow: {
    color: colors.ecoSky,
    letterSpacing: 2,
    textTransform: "uppercase",
    fontSize: typography.sizes.xs,
    marginTop: space[4],
  },
  headline: {
    color: colors.foam,
    fontSize: typography.sizes["3xl"],
    fontWeight: typography.weights.semibold,
    lineHeight: 40,
  },
  sub: {
    color: "rgba(247,251,248,0.86)",
    fontSize: typography.sizes.md,
    lineHeight: 24,
    marginBottom: space[2],
  },
  actions: {
    gap: space[3],
    marginVertical: space[4],
  },
  primaryBtn: {
    backgroundColor: colors.ecoLeaf,
    borderRadius: radii.none,
    borderWidth: 1,
    borderColor: colors.ecoLeaf,
    paddingVertical: space[4],
    alignItems: "center",
  },
  primaryBtnText: {
    color: colors.foam,
    fontWeight: typography.weights.bold,
    letterSpacing: 0.5,
  },
  ghostBtn: {
    borderColor: "rgba(247,251,248,0.35)",
    borderWidth: 1,
    borderRadius: radii.none,
    paddingVertical: space[4],
    alignItems: "center",
  },
  ghostBtnText: {
    color: colors.foam,
    fontWeight: typography.weights.semibold,
    letterSpacing: 0.5,
  },
  sectionTitle: {
    color: colors.foam,
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.semibold,
    marginTop: space[6],
    marginBottom: space[2],
  },
  metrics: {
    gap: space[3],
  },
  metricCard: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: radii.none,
    borderWidth: 1,
    borderColor: "rgba(247,251,248,0.12)",
    padding: space[5],
  },
  metricValue: {
    color: colors.sunlit,
    fontSize: typography.sizes["2xl"],
    fontWeight: typography.weights.bold,
  },
  metricLabel: {
    color: colors.seaSoft,
    marginTop: space[1],
  },
  stepCard: {
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: radii.none,
    borderWidth: 1,
    borderColor: "rgba(247,251,248,0.1)",
    padding: space[5],
    marginBottom: space[3],
  },
  stepIndex: {
    color: colors.ecoSky,
    fontSize: typography.sizes.sm,
    letterSpacing: 1,
    marginBottom: space[2],
  },
  stepTitle: {
    color: colors.foam,
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    marginBottom: space[2],
  },
  stepBody: {
    color: "rgba(247,251,248,0.8)",
    lineHeight: 22,
  },
  quote: {
    color: colors.foam,
    fontSize: typography.sizes.lg,
    fontStyle: "italic",
    marginTop: space[8],
    lineHeight: 28,
  },
  attribution: {
    color: colors.seaSoft,
  },
  parent: {
    color: colors.ecoSky,
    marginTop: space[8],
    fontSize: typography.sizes.sm,
  },
  navHint: {
    color: "rgba(247,251,248,0.45)",
    fontSize: typography.sizes.xs,
    lineHeight: 18,
    marginTop: space[2],
  },
});
